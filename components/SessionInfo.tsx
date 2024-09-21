"use client";

import { addUser } from "@/app/actions/addUser";
import { currentUserIdState } from "@/app/utils/Recoil";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useAsync } from "react-use";
import { useRecoilState } from "recoil";

const SessionInfo = () => {
  const session = useSession();

  const [currentUserId, setCurrentUserId] = useRecoilState(currentUserIdState);


  useAsync(async () => {
    const data = await addUser({
      name: session.data?.user?.name ?? "",
      email: session.data?.user?.email ?? "",
      image: session.data?.user?.image ?? "",
    });

    setCurrentUserId(data.id)
    return data
  }, [session.data]);

  
  useEffect(() => {
    console.log('session in SessionInfo.tsx:', session)
  }, [session])


  // useEffect(() => {
  //   console.log("currentUser in SessionInfo:", currentUser);
  //   if (!currentUser.loading) setCurrentUserId(currentUser?.value?.id);
  // }, [currentUser]);

  useEffect(() => {
    console.log("currentUserId in SessionInfo:", currentUserId);
  }, [currentUserId]);

  return <div></div>;
};

export default SessionInfo;
