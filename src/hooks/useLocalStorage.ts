
const useLocalStorage = () => {
   const setInLocal = (name: string, value: string) => {
      localStorage.setItem(name, value);
   }

   const getFromLocal = (name: string): string => {
      const data = localStorage.getItem(name);
      if (data)
         return data;
      return "";
   }
   const updateValue = (name: string, value: string) => {
      localStorage.setItem(name, value);
   }

   return { setInLocal, getFromLocal, updateValue };
}


export default useLocalStorage;