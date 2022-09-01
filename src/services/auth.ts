interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'jasgdafjhgdsagdosagd',
        user: {
          name: 'Rogerio',
          email: 'roger10cassares@gmail.com',
        },
      });
    }, 2000);
  });
}
