
type BreadcrumbProps = {
  category: string;
  title: string;
}

function Breadcrumb({ category, title }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li key="category">
          <div className="flex items-center">
            {category}
            <svg
              fill="currentColor"
              width={16}
              height={20}
              viewBox="0 0 16 20"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li className="text-sm">
          {title}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;


