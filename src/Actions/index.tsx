import { Action } from "@raycast/api";
import { ScryfallCard } from "../Types";

export function SharedCardActions({ card }: { card: ScryfallCard }) {
    return (
        <>
            <Action.OpenInBrowser url={card.scryfall_uri} />
            <Action.CopyToClipboard title="Copy Card Name" content={card.name} />
            <Action.CopyToClipboard title="Copy Card for Scryfall Slackbot" content={`[[${card.set_name}]]`} />
        </>
    );
}