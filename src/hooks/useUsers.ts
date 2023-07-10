import React, {useEffect, useState} from "react";
import UserService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const [users, setUsers] = useState<User[]>([]);
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const useUsers = () => {
useEffect(() => {
    setLoading(true);
    const {request, cancel} = UserService.getAll<User>();
    request.then((res) => {
      setUsers(res.data);
      setLoading(false);
    })
    .catch((err) => {
      if (err instanceof CanceledError) {
        return;
      } 
      setError(err.message);  
      
    })
    .finally(() => {
      setLoading(false);
    }
    );
    return () => cancel();
  }, []);
    return {users, error, loading, setUsers, setError, setLoading};
}

export default useUsers;