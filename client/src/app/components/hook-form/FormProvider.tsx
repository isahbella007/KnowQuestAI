import { ReactNode } from 'react';
// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
  id?: string;
};

export default function FormProvider({ children, onSubmit, methods, id = 'just a form' }: Props) {
  return (
    <Form {...methods}>
      <form id={id} onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}
