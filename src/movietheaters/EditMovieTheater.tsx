import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater() {
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{
          name: 'Sambil',
          latitude: 42.52879629320373,
          longitude: -83.3806085586548,
        }}
        onSubmit={values => console.log(values)}
      />
    </>
  );
}
