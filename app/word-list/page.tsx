"use client";
import React, { Fragment, useEffect } from "react";
import { useUserStore } from "@/app/shared/providers/user-store-provider";
import { useQuery } from "@tanstack/react-query";
import { getWordListRequest } from "@/app/shared/api/fireabse/words/get-word-list-request";
import { Grid, LoadingOverlay } from "@mantine/core";

const Page = () => {
  const { user } = useUserStore((s) => s);
  const { isLoading, data } = useQuery({
    queryKey: ["word-list"],
    queryFn: getWordListRequest,
    enabled: !!user,
  });

  useEffect(() => {
    console.log({ data });
  }, [data]);

  if (isLoading) {
    return (
      <LoadingOverlay
        visible={true}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
    );
  }

  return (
    <Grid>
      {data?.map((doc) => (
        <Fragment key={doc.id}>
          <Grid.Col span={5}>{doc.en}</Grid.Col>
          <Grid.Col span={2}>&gt;</Grid.Col>
          <Grid.Col span={5}>{doc.ru}</Grid.Col>
        </Fragment>
      ))}
    </Grid>
  );
};

export default Page;
