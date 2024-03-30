import * as React from "react";
import { UserDetailModel } from "@/Core/Models/User";

interface UserDetailCardProps {
  user: UserDetailModel;
}

const UserDetailCard: React.FC<UserDetailCardProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mb-4" />
      <strong className="text-lg font-bold mb-2">@{user.login}</strong>
    </div>
  );
};

export default UserDetailCard;
