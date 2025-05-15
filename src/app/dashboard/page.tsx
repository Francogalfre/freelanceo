import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import WelcomeBar from "./components/home/welcomebar";
import { getProjects } from "./projects/actions";
import { getClients } from "./clients/action";

const DashboardPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const projects = await getProjects();
  const clients = await getClients();

  // Totales
  const totalProjects = projects.length;
  const totalClients = clients.length;
  const totalEarnings = projects.reduce((acc, p) => acc + (Number(p.earnings) || 0), 0);

  // Tasks pendientes (falsas)
  const pendingTasks = [
    { title: "Enviar factura a cliente X", project: "Landing Page" },
    { title: "Revisar feedback de cliente Y", project: "E-commerce" },
    { title: "Actualizar contrato", project: "App Móvil" },
    { title: "Subir archivos finales", project: "Portfolio" },
    { title: "Agendar reunión", project: "Web Corporativa" },
  ];

  // Datos para el gráfico de earnings (simulado)
  const earningsData = [
    { name: "Enero", earnings: 1200 },
    { name: "Febrero", earnings: 2100 },
    { name: "Marzo", earnings: 800 },
    { name: "Abril", earnings: 1600 },
    { name: "Mayo", earnings: 2500 },
  ];

  return (
    <main className="grid grid-cols-6 gap-6">
      {/* Main content */}
      <section className="col-span-4 flex flex-col gap-6">
        {/* Banner */}
        <WelcomeBar session={session} />
        {/* Cards resumen */}
        <section className="w-full grid grid-cols-3 gap-6 pt-2">
          <div className="flex flex-col px-6 py-4 border-1 border-blue-100 gap-2 rounded-xl bg-white shadow">
            <span className="text-gray-500">Proyectos Totales</span>
            <h1 className="text-3xl font-bold text-blue-600">{totalProjects}</h1>
          </div>
          <div className="flex flex-col px-6 py-4 border-1 border-blue-100 gap-2 rounded-xl bg-white shadow">
            <span className="text-gray-500">Clientes Totales</span>
            <h1 className="text-3xl font-bold text-blue-600">{totalClients}</h1>
          </div>
          <div className="flex flex-col px-6 py-4 border-1 border-blue-100 gap-2 rounded-xl bg-white shadow">
            <span className="text-gray-500">Earnings Totales</span>
            <h1 className="text-3xl font-bold text-blue-600">${totalEarnings.toLocaleString()}</h1>
          </div>
        </section>
        {/* Gráfico de earnings */}
        <section className="w-full bg-white rounded-xl p-6 shadow flex flex-col gap-2 items-center justify-center min-h-[250px]">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Earnings por mes</h2>
        </section>
        {/* Actividad reciente */}
        <section className="w-full bg-white rounded-xl p-6 shadow flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Actividad reciente</h2>
          <div className="flex flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-blue-600">Últimos proyectos</h3>
              <ul className="text-gray-600 text-sm">
                {projects.slice(0, 3).map((p, i) => (
                  <li key={i}>{p.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-600">Nuevos clientes</h3>
              <ul className="text-gray-600 text-sm">
                {clients.slice(0, 3).map((c, i) => (
                  <li key={i}>{c.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>

      {/* Sidebar derecho */}
      <section className="col-span-2 flex flex-col gap-6">
        {/* Usuario */}
        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2 items-center">
          <div className="size-16 rounded-full bg-blue-600 flex items-center justify-center mb-2">
            <span className="text-white text-3xl font-bold">{session?.user?.name?.[0] || "U"}</span>
          </div>
          <div className="text-center">
            <div className="font-bold text-blue-600 text-lg">{session?.user?.name}</div>
            <div className="text-gray-500 text-sm">{session?.user?.email}</div>
            <div className="text-gray-600 mt-2">
              Good evening {session?.user?.name?.split(" ")[0] || ""}!<br />
              Let's continue with your Freelance career
            </div>
          </div>
        </div>
        {/* Tasks Pendientes */}
        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Tasks Pendientes</h2>
          {pendingTasks.length === 0 ? (
            <span className="text-gray-400">No tienes tasks pendientes 🎉</span>
          ) : (
            <ul className="flex flex-col gap-2">
              {pendingTasks.slice(0, 5).map((task, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
                  <span className="font-medium">{task.title}</span>
                  <span className="text-xs text-gray-400 ml-2">({task.project})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Próximo proyecto o widget extra */}
        <div className="bg-blue-600 rounded-xl p-6 shadow flex flex-col gap-2 text-white">
          <h2 className="text-lg font-semibold mb-2">Tu próximo proyecto</h2>
          <div>
            <div className="font-bold">Mobile App Redesign for Task Manager</div>
            <div className="text-sm">Deadline: 14 de Mayo de 2025</div>
          </div>
          <button className="mt-2 bg-white text-blue-600 rounded-lg px-4 py-2 font-semibold hover:bg-blue-50 transition">
            Ver Detalles
          </button>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
