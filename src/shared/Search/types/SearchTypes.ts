// Creating the search this way, allows for easy scalability.
// All we need to add more params is to specify them here,
// add them on the Search Component and handle them on their parent
export interface ISearch {
  text?: string;
}
