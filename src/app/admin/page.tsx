"use client";

import { useState } from "react";

interface Request {
  id: number;
  name: string;
  email: string;
  category: string;
  enquiry: string;
  consultation: string;
  files: string[];
  status: "pending" | "in-progress" | "completed";
}

export default function AdminDashboardPage() {
  const [requests, setRequests] = useState<Request[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      category: "Academic Writing",
      enquiry: "Need help with dissertation.",
      consultation: "2025-09-10T14:00",
      files: ["thesis.docx"],
      status: "pending",
    },
  ]);

  const updateStatus = (id: number, newStatus: Request["status"]) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <main className="dashboard">
      <section className="container">
        <h1>Admin Dashboard</h1>
        <p className="lead">Manage client requests and consultations.</p>

        <table className="request-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Email</th>
              <th>Category</th>
              <th>Enquiry</th>
              <th>Consultation</th>
              <th>Files</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>{req.category}</td>
                <td>{req.enquiry}</td>
                <td>{new Date(req.consultation).toLocaleString()}</td>
                <td>
                  {req.files.map((f, i) => (
                    <div key={i}>{f}</div>
                  ))}
                </td>
                <td>{req.status}</td>
                <td>
                  <select
                    value={req.status}
                    onChange={(e) =>
                      updateStatus(req.id, e.target.value as Request["status"])
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}