import { getAllVisitors } from "@/lib/statistics";
import { useEffect, useState } from "react";

interface Visitor {
  id: string;
  visitorId: string;
  userAgent: string;
  language: string;
  platform: string;
  screenResolution: string;
  timezone: string;
  referrer?: string;
  visitDate: string;
  createdAt: string;
  updatedAt: string;
}

export default async function VisitorsDisplay() {
  const response = await getAllVisitors();

  console.log(response);

  if (response?.success !== true) {
    return <p>Failed to fetch visitors data</p>;
  }

  const visitors = response?.data;

  if (visitors?.length === 0) {
    return <div>No visitors found.</div>;
  }

  return (
    <div>
      <h3>All Visitors</h3>
      <table>
        <thead>
          <tr>
            <th>Visitor ID</th>
            <th>User Agent</th>
            <th>Language</th>
            <th>Platform</th>
            <th>Screen Resolution</th>
            <th>Timezone</th>
            <th>Referrer</th>
            <th>Visit Date</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {visitors?.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.visitorId}</td>
              <td>{visitor.userAgent}</td>
              <td>{visitor.language}</td>
              <td>{visitor.platform}</td>
              <td>{visitor.screenResolution}</td>
              <td>{visitor.timezone}</td>
              <td>{visitor.referrer || "N/A"}</td>
              <td>{new Date(visitor.visitDate).toLocaleString()}</td>
              <td>{new Date(visitor.createdAt).toLocaleString()}</td>
              <td>{new Date(visitor.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
