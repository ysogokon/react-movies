import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';
import * as Yup from 'yup';
import TextField from '../forms/TextField';

export default function CreateGenre() {
  // const history = useHistory();

  return (
    <>
      <h3>Create Genre</h3>

      <Formik
        initialValues={{ name: '' }}
        onSubmit={value => {
          // form submitted
          console.log(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name field is required'),
        })}
      >
        <Form>
          <TextField field="name" displayName="Name"></TextField>
          <Button type="submit">Save Changes</Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancel
          </Link>
        </Form>
      </Formik>

      {/* <Button
        onClick={() => {
          // ...saving in DB
          history.push('/genres');
        }}
      >
        Save Changes
      </Button> */}
    </>
  );
}
