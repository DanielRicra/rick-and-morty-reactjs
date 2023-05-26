const URL = 'http://localhost:3001/api/v1/user/login';

export const loginUser = async ({ email, password }) => {
   try {   
      const response = await fetch(URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (!response.ok) {
         throw new Error(data.error);
      }
      
      return data;
   } catch (error) {
      throw error;  
   }
};
