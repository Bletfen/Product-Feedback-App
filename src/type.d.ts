interface IUser {
  image: string;
  name: string;
  username: string;
}

type IComments = {
  id: number;
  content: string;
  user: IUser;
};

type IProductRequests = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: IComments[];
};

interface ICurrentUser {
  image: string;
  name: string;
  username: string;
}

interface IData {
  currentUser: ICurrentUser;
  productRequests: IProductRequests[];
}
