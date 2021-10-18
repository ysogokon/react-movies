import GenreForm from './GenreFrom';

export default function CreateGenre() {
  // const history = useHistory();

  return (
    <>
      <h3>Create Genre</h3>
      <GenreForm
        model={{ name: '' }}
        onSubmit={async value => {
          // when form is posted
          await new Promise(r => setTimeout(r, 1));
          console.log(value);
        }}
      />

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
