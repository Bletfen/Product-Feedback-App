interface IUser {
  image: string;
  name: string;
  username: string;
}

type TReplies = {
  content: string;
  replyingTo: string;
  user: IUser;
};

type TComments = {
  id: number;
  content: string;
  user: IUser;
  replies: TReplies[];
};

type TProductRequests = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: TComments[];
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
