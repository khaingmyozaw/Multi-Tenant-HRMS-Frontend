import React from 'react'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import ComponentCard from '@/components/common/ComponentCard'

export default function DashboardPage() {
	return (
		<div className="p-6">
			<PageBreadcrumb pageTitle="Dashboard" />

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6">
				<ComponentCard title="Employees" desc="Total active employees">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-2xl font-semibold">1,254</p>
							<p className="text-sm text-gray-500">Active this month</p>
						</div>
						<div className="text-sm text-green-600 font-medium">+4.2%</div>
					</div>
				</ComponentCard>

				<ComponentCard title="Attendance" desc="On-time rate">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-2xl font-semibold">92%</p>
							<p className="text-sm text-gray-500">On-time arrivals</p>
						</div>
						<div className="text-sm text-red-600 font-medium">-0.8%</div>
					</div>
				</ComponentCard>

				<ComponentCard title="Payroll" desc="This period">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-2xl font-semibold">$124,560</p>
							<p className="text-sm text-gray-500">Total payout</p>
						</div>
						<div className="text-sm text-green-600 font-medium">+1.9%</div>
					</div>
				</ComponentCard>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2">
					<ComponentCard title="Overview" desc="Recent activity and trends">
						<div className="h-56 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-400">
							Chart placeholder
						</div>
					</ComponentCard>
				</div>

				<div>
					<ComponentCard title="Quick Actions">
						<div className="flex flex-col gap-3">
							<button className="w-full px-4 py-2 rounded-lg bg-brand-500 text-white">Create Employee</button>
							<button className="w-full px-4 py-2 rounded-lg border">Run Payroll</button>
						</div>
					</ComponentCard>
				</div>
			</div>
		</div>
	)
}
