import AdminSidebarComponent from "../../../adminComponents/AdminDashboard/AdminSidebarComponent";

function Users() {
  return (
    <>
      <AdminSidebarComponent highlighted="Users">
        <main id="content" className="flex-1 p-6 lg:px-8">
          <div className="max-w-full mx-auto">
            {/* <!-- Replace with your content --> */}

            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
            </div>
          </div>
        </main>
      </AdminSidebarComponent>
    </>
  );
}

export default Users;
