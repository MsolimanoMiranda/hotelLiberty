import api from '../../../helpers/axios';



const authService = {

  saveUser: async (user:unknown): Promise<unknown | null> => {
    try {
      const { data, status } = await api.post(`/saveUsert`,user);
      if(status === 200) return data
      return null
    } catch (err) {
      return null;
    }
  }



}
export default authService;