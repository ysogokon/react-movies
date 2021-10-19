import { Form, Formik, FormikHelpers } from 'formik';
import { movieCreationDTO } from './movies.model';
import * as Yup from 'yup';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';

export default function MovieForm(props: movieFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Title field is required')
          .firstLetterUppercase(),
      })}
    >
      {formikProps => (
        <Form>
          <TextField displayName="Title" field="title" />
          <TextField displayName="Trailer" field="trailer" />
          <DateField displayName="Display Name" field="releaseName" />
          <ImageField
            displayName="Poster"
            field="poster"
            imageURL={props.model.posterURL}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link className="btn btn-secondary" to="/movies">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
}
