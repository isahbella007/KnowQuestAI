// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Autocomplete, AutocompleteProps } from '@mui/material';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  children: any;
};

type Value = any;
type Multiple = boolean;
type DisableClearable = boolean;
type FreeSolo = boolean;

type Props = IProps & AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>;
export default function RHFAutocomplete({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Autocomplete {...field} fullWidth {...other} />}
    />
  );
}
