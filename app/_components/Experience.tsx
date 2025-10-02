import Link from "next/link";

interface ExperienceProps {
  title: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
}

export default function Experience({
  title,
  company,
  companyUrl,
  startDate,
  endDate,
}: ExperienceProps) {
  return (
    <div className="flex w-full items-center justify-between group">
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[13.5px] leading-none text-gray-800 dark:text-gray-200">
              {title}
            </span>
            <Link
              href={companyUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative inline-block">
                <div className="rotate-12 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700 p-1 transition duration-300 hover:rotate-0">
                  <div className="w-[18px] h-[18px] bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-300">
                      {company}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-gray-800 dark:border-gray-400 opacity-50"></span>
          <span className="text-[12.5px] leading-none text-gray-600 dark:text-gray-400">
            {startDate} - {endDate}
          </span>
        </div>
      </div>
    </div>
  );
}
