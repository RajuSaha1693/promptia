"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/profile";
const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };

    if (session?.user.id) fetchPost();
  }, []);

  const handleEdit = () => {};
  const handleDelete = async () => {};
  return (
    <Profile
      name="My "
      desc="Welcome to Personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
