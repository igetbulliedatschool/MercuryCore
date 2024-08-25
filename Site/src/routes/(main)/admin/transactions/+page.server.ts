import {
	getAdminTransactions,
	transformTransactions,
} from "$lib/server/economy"
import { authorise } from "$lib/server/lucia"
import { error } from "@sveltejs/kit"

export async function load({ locals }) {
	await authorise(locals, 5)

	const transactions = await getAdminTransactions()
	if (!transactions.ok) error(500, "Failed to fetch transactions")

	return transformTransactions(transactions.value)
}
