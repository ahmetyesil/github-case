import * as React from "react";
import type { NextPage } from "next";
import { SeoHead } from "@/Core/index";
import TopBannerSection from "@/UI/Common/TopBannerSection";
import { useState } from "react";
import axios from "axios";
import Container from "@/UI/Common/Container";
import {Col, Input, message, Row} from "antd";
import { IoSearchOutline } from "react-icons/io5";
import UserCard from "@/UI/User/UserCard";
import { UserModel } from "@/Core/Models/User";
import Loading from "@/UI/Common/Loading";
// @ts-ignore
import debounce from "lodash/debounce";
const HomePage: NextPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearch = debounce((value:string) => {
    handleSearch(value);
  }, 1000);

  const handleSearch = async (value:string) => {
    if (value) {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/search/users?q=${value}`);
        const data = response.data;
        setList(data.items);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error :', error);
      }
    } else {
      setList([]);
    }
  };

  return (
    <>
      <SeoHead title="Github Case - Home" />
      <TopBannerSection/>
      <div className="bg-white">
        <section>
          <div className="relative pr-0 pl-0 pb-[100px] min-h-screen">
            <Container size="500px">
              <div className="mt-[-20px] bg-white rounded-md">
                <Input
                  addonAfter={<IoSearchOutline />}
                  placeholder="Github Kullanıcı"
                  size="large"
                  onInput={(e: any) => debouncedSearch(e.target.value)} />
              </div>

              <div className="mt-10">
                {contextHolder}
                <Row gutter={[16, 16]}>
                  {
                   loading && <Col span={24} className="flex justify-center">
                      <Loading/>
                    </Col>
                  }
                  {
                    list.map((item: UserModel) => <Col key={item.id} span={12}>
                      <UserCard user={item} />
                    </Col>)
                  }
                  {
                    list.length === 0 && <Col span={24} className="text-center">Liste Boş</Col>
                  }
                </Row>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
