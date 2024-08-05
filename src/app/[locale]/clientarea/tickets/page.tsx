"use client"; // Add this line to mark the parent component as a Client Component

import { get } from "@/services/http";
import { useEffect, useState } from "react";
import { ALL_TICKETS, TICKETS } from "@/utils";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

type Ticket = {
  id: number;
  title: string;
  created_at: string;
  status_name: string;
  name: string;
  total: number;
};

type ApiResponse = {
  current_page: number;
  data: Ticket[];
  first_page_url: string;
  from: number;
  to: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  prev_page_url: string;

  // Add other properties here as needed
};

const Home = () => {
  const router = useRouter();
  const t = useTranslations("Ticket");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [pagination, setPagination] = useState<ApiResponse | null>(null);
  const [res, setRes] = useState<any>([]);
  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async (page: number = 1) => {
    try {
      console.log(page);

      const response: ApiResponse = await get(`${ALL_TICKETS}?page=${page}`);
      setRes(response);
      setTickets(response.data);
      setCurrentPage(response.current_page);
      setPagination(response);
    } catch (error) {
      console.error("Error fetching Tickers:", error);
    }
  };
  const extractDate = (dateTimeString: string) => {
    const datePart = dateTimeString.split("T")[0];
    return datePart;
  };

  const handleRowClick = async (ticketId: number) => {
    router.push(`/clientarea/tickets/create?id=${ticketId}`);
  };

  const handlePageClick = (page: number) => {
    fetchTickets(page);
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <div className="text-2xl text-bold mb-2">
                  {t("SupportTitle")}
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link
                  href={"/clientarea/tickets/create"}
                  className="bg-orange-200 m-2 font-medium text-orange-600 hover:text-white px-5 items-end py-3 h-fit rounded-md text-sm hover:bg-orange-600"
                >
                  {t("CreateText")}
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              {tickets?.length === 0 ? (
                // Render "No tickets found" message when tickets array is empty
                <div className="text-center p-4 text-gray-500 dark:text-gray-400">
                  No tickets found.
                </div>
              ) : (
                // Render the table when there are tickets
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3"> {t("SubjectHeading")} </th>
                      <th className="px-4 py-3"> {t("CreatedHeading")} </th>
                      <th className="px-4 py-3"> {t("StatusHeading")} </th>
                      <th className="px-4 py-3"> {t("AssignedHeading")} </th>
                      <th className="px-4 py-3"> {t("ViewHeading")} </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket) => (
                      <tr
                        key={ticket.id}
                        className="border-b dark:border-gray-700"
                      >
                        <td className="px-4 py-3">{ticket.title}</td>
                        <td className="px-4 py-3">
                          {extractDate(ticket.created_at)}
                        </td>
                        <td className="px-4 py-3">{ticket.status_name}</td>
                        <td className="px-4 py-3">{ticket.name}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => handleRowClick(ticket.id)}
                            className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                          >
                            {t("ViewHeading")}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            {tickets.length !== 0 && pagination && (
              <nav
                className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {t("ShowingText")} &nbsp;
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {res.from} <span>-</span> {res.to}
                  </span>
                  &nbsp; {t("ofText")} &nbsp;
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {res.total}
                  </span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <button
                      onClick={() => handlePageClick(currentPage - 1)}
                      disabled={!pagination.prev_page_url}
                      className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 ${
                        !pagination.prev_page_url
                          ? "pointer-events-none"
                          : "hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }`}
                    >
                      <span className="sr-only"> {t("PreviousTitle")} </span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                  {Array.from({ length: pagination.last_page }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageClick(i + 1)}
                      className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ${
                        currentPage === i + 1
                          ? "font-semibold text-gray-900 dark:text-white bg-gray-300"
                          : "hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <li>
                    <button
                      onClick={() => handlePageClick(currentPage + 1)}
                      disabled={!pagination.next_page_url}
                      className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 ${
                        !pagination.next_page_url
                          ? "pointer-events-none"
                          : "hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }`}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
