// import { GetStaticProps, GetStaticPaths } from 'next'

// import { User } from '../../interfaces'

// import Layout from '../../components/Layout'

// import { useMovie } from '../../providers/movie'
// import MovieList from '../../components/Movie/MovieList/MovieList'

// type Props = {
//   item?: User
//   errors?: string
// }

// const StaticPropsDetail = ({ item, errors }: Props) => {

//     const {FetchedMovies}=useMovie()

//   if (errors) {
//     return (
//       <Layout >
//         <p>
//           <span style={{ color: 'red' }}>Error:</span> {errors}
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout>
//       {item && <MovieList movies={item} />}
//     </Layout>
//   )
// }

// export default StaticPropsDetail

// export const getStaticPaths: GetStaticPaths = async () => {
//     const {FetchedMovies}=useMovie()
  
//   const paths = FetchedMovies.map((user) => ({
//     params: { id: user.id.toString() },
//   }))

//   return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const {FetchedMovies}=useMovie()
//   try {
//     const id = params?.id
//     const item = FetchedMovies.find((data) => data.id === id)

//     return { props: { item } }
//   } catch (err: any) {
//     return { props: { errors: err.message } }
//   }
// }
