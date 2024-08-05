"use client";
import Alert from "@/components/Alert";
import { ApiResponse } from "@/models/ApiResponse.model";
import { get, post } from "@/services/http";
import { TICKET, TICKETS } from "@/utils/api-routes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Priorities = Record<string, string>;
type Categories = Record<string, string>;

const CreateTickets = () => {
  const router = useRouter();
  const t = useTranslations("Create");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [successMessage, setSuccessMessage] = useState<any>("");
  const [error, setError] = useState("");
  const [subject, setSubject] = useState("");
  const [priorities, setPriorities] = useState<Priorities>({});
  const [categories, setCategories] = useState<Categories>({});
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fieldsDisabled, setFieldsDisabled] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(false);

  useEffect(() => {
    if (id) {
      fetchSingleTicket(id);
      setFieldsDisabled(true); // Disable fields
      setButtonHidden(true);
    }
    setError("");
    setSuccessMessage("");
  }, [subject, message]);

  useEffect(() => {
    fetchTicketInitiate();
  }, []);
  useEffect(() => {
    const firstPriorityKey = Object.keys(priorities)[0];
    setPriority(firstPriorityKey);

    const firstCategoryKey = Object.keys(categories)[0];
    setCategory(firstCategoryKey);
  }, [priorities, categories]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const validateForm = () => {
    let errorMsg = "";

    if (!subject && !message) {
      errorMsg = "Subject and message are required.";
    } else if (!subject) {
      errorMsg = "Subject is required.";
    } else if (!message) {
      errorMsg = "Message is required.";
    }
    if (errorMsg) {
      setError(errorMsg);
      return false;
    }

    setError("");
    return true;
  };

  const fetchSingleTicket = async (id: any) => {
    try {
      const response: any = await get(TICKETS + id);
      if (response && response.resource.data.length > 0) {
        const content = response.resource.data[0].content;
        setMessage(content); // Set the message state
      } else {
        console.error("Response, resource, or data is undefined or empty");
      }
    } catch (error) {
      console.error("Error fetching :", error);
    }
  };

  const fetchTicketInitiate = async () => {
    try {
      const ticketInitiate: any = await get(TICKETS);
      setPriorities(ticketInitiate.Priorities);
      setCategories(ticketInitiate.Categories);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", subject);
      formData.append("priority_id", priority);
      formData.append("category_id", category);
      formData.append("content", message);
      if (file) {
        // Explicitly cast 'file' to 'Blob' type before appending
        formData.append("file", file as Blob);
      }
      try {
        const response: ApiResponse = await post(TICKETS, formData);
        if (response.message === "Ticket Added Successfully.") {
          setSuccessMessage(response.message);
          router.push("/clientarea/tickets");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error sending ticket:", error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center">
        {successMessage && <Alert type="success" message={successMessage} />}
      </div>
      <div className="px-3 md:px-10">
        <div className="flex justify-between items-end border-b-2 border-b-gray-200 dark:border-b-gray-700">
          <div className="py-8">
            <div className="text-2xl text-bold mb-2"> {t("TicketTitle")} </div>
            <div className="text-lg"> {t("TicketParagraph")} </div>
          </div>
          <div className="py-3">
            <Link
              href={"/clientarea/tickets"}
              className="bg-orange-200 m-2 font-medium text-orange-600 hover:text-white px-5 items-end py-3 h-fit rounded-md text-sm hover:bg-orange-600"
            >
              {t("TicketsHeading")}
            </Link>
          </div>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className=" py-6   grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="col-span-2">
              <label
                htmlFor="subject"
                className="block mb-2 font-medium text-gray-700"
              >
                {t("SubjectTitle")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 border rounded-md"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={fieldsDisabled}
              />
            </div>
            <div>
              <label
                htmlFor="priority"
                className="block mb-2 font-medium text-gray-700"
              >
                {t("PriorityTitle")}
              </label>
              <select
                id="priority"
                className="w-full p-2 border rounded-md"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                disabled={fieldsDisabled}
              >
                {Object.keys(priorities).map((key) => (
                  <option key={key} value={key}>
                    {priorities[key]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 font-medium text-gray-700"
              >
                {t("CategoryText")}
              </label>
              <select
                id="category"
                className="w-full p-2 border rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={fieldsDisabled}
              >
                {Object.keys(categories).map((key) => (
                  <option key={key} value={key}>
                    {categories[key]}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700"
              >
                {t("MessageText")}
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={fieldsDisabled}
              ></textarea>
            </div>
            <div className="col-span-2">
              <label className="block mb-2 font-medium text-gray-700">
                {t("UploadTitle")}
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{t("ClickTitle")}</span>{" "}
                      {t("DragTitle")}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {" "}
                      {t("FileOptions")}{" "}
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".svg, .png, .jpg, .jpeg, .gif"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
            <div className="col-span-2 text-center">
              {/* {file && <p className="text-green-600">File selected: {file.name}</p>} */}
              <button
                hidden={buttonHidden}
                type="submit"
                className={`px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 spinner ${
                  loading ? "loading" : ""
                }`}
              >
                {t("SendTitle")}
                {loading ? <div className="loader"></div> : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTickets;
