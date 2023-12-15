import { Card, List } from "@prisma/client";

export type ListWitdhCards = List & { cards: Card[] };

export type CardWithList = Card & { list: List };
