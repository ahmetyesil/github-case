import * as React from "react";
import type { NextPage } from "next";
import { SeoHead } from "@/Core/index";
import TopBannerSection from "@/UI/Common/TopBannerSection";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@/UI/Common/Container";
import { UserDetailModel } from "@/Core/Models/User";
import UserDetailCard from "@/UI/User/UserDetailCard";
import { useRouter } from "next/router";
import MostUsedLanguages from "@/UI/Common/MostUsedLanguages";
const UserDetailPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState<UserDetailModel | null>(null);
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
    }
  };


  useEffect(() => {
    fetchUserData();
  }, [username]);
  return (
    <>
      <SeoHead title="Github Case - Home" />
      <TopBannerSection/>
      <div className="bg-white">
        <section>
          <div className="relative pr-0 pl-0 pb-[100px] min-h-screen">
            <Container size="662px">
              <div className="mt-[-80px] rounded-md">
                {user && <UserDetailCard user={user} />}
              </div>

              <div className="mt-10">
                <MostUsedLanguages username={username as string} />
              </div>
            </Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserDetailPage;
