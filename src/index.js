require('dotenv').config();
const clientId = process.env.CLIENT_ID;
const DiscordRPC = require('discord-rpc')
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId)

async function setActivity(party) {
	if (!RPC) return;
	RPC.setActivity({
		details: `ᅠᅠᅠᅠᅠᅠᅠᅠ`,
		state: `Fix bugs`,
		startTimestamp: Date.now(),
		largeImageKey: 'pepe',
		largeImageText: `Large Icon.`,
		smallImageKey: `discord_verified`,
		smallImageText: `Small Icon.`,
		partySize: party,
		partyMax: party + 2 + Math.floor(Math.random() * 5),
		instance: true,
		buttons: [
			{
				label: `GitHub`,
				url: `https://github.com/Lenokail`
			}
		]
	});
}

RPC.on('ready', async () => {
	let countBugs = 1
	setActivity(countBugs);
	setInterval(() => {
		countBugs++
		setActivity(countBugs)
	}, 15 * 1000)
});

RPC.login({ clientId }).catch(err => console.error(err))