import * as React from "react";
import { UserModel } from "@/Core/Models/User";
import Link from "next/link";

interface UserCardProps {
  user: UserModel;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Link href={`user/${user.login}`} className="flex align-middle mb-4 p-2 rounded-2xl hover:bg-gray-50 transition-all">
      <img src={user.avatar_url} alt={user.login} className="w-[50px] h-[50px] rounded-full mr-2"/>
      <div>
        <div>
          <strong>@{user.login}</strong>
        </div>
        <div>
          <span className="text-gray-400">{user.type}</span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
