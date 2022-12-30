import base64 from "base-64";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Layout from "../components/Layout";
import Link from "next/link"

export const getServerSideProps: GetServerSideProps<{
  data: any;
}> = async () => {
  const res = await fetch(`http://${process.env.ANSIBLE_HOST}/api/v2/jobs/`, {
    headers: new Headers({
      Authorization: `Basic ${base64.encode(
        `${process.env.ANSIBLE_USERNAME}:${process.env.ANSIBLE_PASSWORD}`
      )}`,
    }),
  });
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
  };

export default function Dashboard({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const rows = [];
    // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.results.length; i++) {
    let color = "bg-info text-info-content";
    if (data.results[i].status === 'successful') {
      color = "bg-success text-success-content";
    } else if (data.results[i].status === 'failed') {
      color = "bg-error text-error-content";
    }
    
    rows.push(
      <tr key={data.results[i].id} className="table-row">
        <td className={color}>
          <Link href={`/jobs/${data.results[i].id}`}>{data.results[i].id}</Link>
        </td>
        <td className={color}>{data.results[i].name}</td>
        <td className={color}>{data.results[i].started}</td>
        <td className={color}>{data.results[i].finished}</td>
        <td className={color}>{data.results[i].status}</td>
      </tr>
    );
  }
  
  return (
    <Layout>
      <div className="shadow stats">
        <div className="stat">
          <div className="stat-title">Total Deployments</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
      <div className="pt-4 overflow-x-auto">
        <div className="prose"><h2 className="prose">Recent Jobs</h2></div>
        <table className="table">
          <thead className="table-header-group">
            <tr className="table-row">
              <th>ID</th>
              <th>Name</th>
              <th>Start</th>
              <th>Finish</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </Layout>
  );
}