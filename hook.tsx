import axios from 'axios';
import { useMutation } from 'react-query';

export const useExample = () => {
  const mutateResult = useMutation(
    async () => {
      const { data: response } = await axios.get(`https://example.com`);

      if (response === 'OK_BUT_NOT_ALRIGHT') {
        throw Error('help me feel alright!');
      }
      return { data: response };
    },
    {
      onError: (err) => {
        // Convert progressevent error to custom error.
        if (err instanceof ProgressEvent) {
          throw Error('interet seems to have been cut off!');
        }

        if (err instanceof Error) {
          throw err;
        }

        throw Error('Generic error for every other error!');
      },
    }
  );

  return mutateResult;
};
