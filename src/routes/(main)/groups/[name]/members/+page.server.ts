// The member page for a group.

import { query, squery, surql } from "$lib/server/surreal"
import { error } from "@sveltejs/kit"

export const load = async ({ params }) => {
	const group = await squery<{
		memberCount: number
		members: {
			number: number
			status: "Playing" | "Online" | "Offline"
			username: string
		}[]
		name: string
	}>(
		surql`
			SELECT
				name,
				count(<-member) AS memberCount,
				(SELECT
					number,
					status,
					username
				FROM <-member<-user) AS members
			FROM group WHERE string::lowercase(name)
				= string::lowercase($name)`,
		params
	)

	if (!group) error(404, "Not found")

	return group
}
