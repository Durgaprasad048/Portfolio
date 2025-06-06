import { useState, ChangeEvent, FormEvent } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
}

interface FormField {
  value: string;
  error: string;
  touched: boolean;
  rules: ValidationRules;
}

type FormFields<T> = {
  [K in keyof T]: FormField;
};

export const useFormValidation = <T extends Record<string, any>>(
  initialState: T,
  validationRules: { [K in keyof T]: ValidationRules }
) => {
  const initialFormFields: FormFields<T> = Object.keys(initialState).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        value: initialState[key],
        error: '',
        touched: false,
        rules: validationRules[key],
      },
    }),
    {} as FormFields<T>
  );

  const [formFields, setFormFields] = useState<FormFields<T>>(initialFormFields);

  const validateField = (name: keyof T, value: string, rules: ValidationRules): string => {
    if (rules.required && !value) {
      return 'This field is required';
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }

    if (rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Please enter a valid value';
    }

    return '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof T, value, formFields[name as keyof T].rules);

    setFormFields((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof T],
        value,
        error,
        touched: true,
      },
    }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof T],
        touched: true,
      },
    }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newFormFields = { ...formFields };

    Object.keys(formFields).forEach((key) => {
      const field = formFields[key as keyof T];
      const error = validateField(key as keyof T, field.value, field.rules);
      
      newFormFields[key as keyof T] = {
        ...field,
        error,
        touched: true,
      };

      if (error) {
        isValid = false;
      }
    });

    setFormFields(newFormFields);
    return isValid;
  };

  const handleSubmit = (onSubmit: (data: T) => void) => (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = Object.keys(formFields).reduce(
        (acc, key) => ({
          ...acc,
          [key]: formFields[key as keyof T].value,
        }),
        {} as T
      );

      onSubmit(formData);
    }
  };

  const resetForm = () => {
    setFormFields(initialFormFields);
  };

  return {
    formFields,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isValid: Object.keys(formFields).every(
      (key) => !formFields[key as keyof T].error && formFields[key as keyof T].touched
    ),
  };
};

export default useFormValidation; 