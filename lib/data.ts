export type ItemType = "lost" | "found"
export type ItemStatus = "active" | "returned"

export type Category =
  | "Electronics"
  | "Keys"
  | "Wallets & IDs"
  | "Bags"
  | "Pets"
  | "Jewellery"
  | "Documents"
  | "Clothing"
  | "Other"

export interface Item {
  id: string
  type: ItemType
  status: ItemStatus
  title: string
  category: Category
  location: string
  date: string // ISO date
  description: string
  contactName: string
}

export const CATEGORIES: Category[] = [
  "Electronics",
  "Keys",
  "Wallets & IDs",
  "Bags",
  "Pets",
  "Jewellery",
  "Documents",
  "Clothing",
  "Other",
]

export const LOCATIONS: string[] = [
  "Sandton City",
  "Rosebank Mall",
  "Braamfontein",
  "Soweto (Maponya Mall)",
  "Melville 7th Street",
  "Randburg",
  "Alexandra",
  "Fourways",
  "Newtown",
  "Parkhurst",
  "Maboneng Precinct",
  "OR Tambo Gautrain",
]

export const CATEGORY_EMOJI: Record<Category, string> = {
  Electronics: "Electronics",
  Keys: "Keys",
  "Wallets & IDs": "Wallets & IDs",
  Bags: "Bags",
  Pets: "Pets",
  Jewellery: "Jewellery",
  Documents: "Documents",
  Clothing: "Clothing",
  Other: "Other",
}

export const SAMPLE_ITEMS: Item[] = [
  {
    id: "1",
    type: "lost",
    status: "active",
    title: "Black iPhone 14 Pro with cracked screen",
    category: "Electronics",
    location: "Sandton City",
    date: "2026-09-15",
    description:
      "Lost my black iPhone near the Nelson Mandela Square fountain around 14:00. Screen has a small crack on the top-right corner. Lock screen shows a photo of my two kids.",
    contactName: "Thabo Mokoena",
  },
  {
    id: "2",
    type: "found",
    status: "active",
    title: "Set of car keys with red VW tag",
    category: "Keys",
    location: "Rosebank Mall",
    date: "2026-09-16",
    description:
      "Found a bunch of keys with a red Volkswagen tag and a Woolworths loyalty fob in the parkade on level 2. Handed a photo to mall security but keeping them safe.",
    contactName: "Lerato Dlamini",
  },
  {
    id: "3",
    type: "found",
    status: "returned",
    title: "Brown leather wallet with SA ID",
    category: "Wallets & IDs",
    location: "Braamfontein",
    date: "2026-09-10",
    description:
      "Found a brown wallet outside Kitcheners on Juta Street. Contained a green SA ID book and a few cards. Reunited with the owner — thank you FindBack!",
    contactName: "Sipho Nkosi",
  },
  {
    id: "4",
    type: "lost",
    status: "active",
    title: "Tan Labrador named Biscuit",
    category: "Pets",
    location: "Parkhurst",
    date: "2026-09-17",
    description:
      "Our friendly tan Labrador slipped out the gate on 4th Avenue. He is wearing a blue collar with a tag. Very gentle, responds to 'Biscuit'. Family is heartbroken.",
    contactName: "Nadia Patel",
  },
  {
    id: "5",
    type: "found",
    status: "active",
    title: "Silver MacBook Air in grey sleeve",
    category: "Electronics",
    location: "Braamfontein",
    date: "2026-09-14",
    description:
      "Someone left a silver MacBook Air in a grey felt sleeve at a coffee shop on De Korte Street. Being kept behind the counter. Describe the stickers to claim.",
    contactName: "Zanele Khumalo",
  },
  {
    id: "6",
    type: "lost",
    status: "active",
    title: "Gold wedding ring with engraving",
    category: "Jewellery",
    location: "Melville 7th Street",
    date: "2026-09-12",
    description:
      "Lost my late grandmother's gold wedding ring somewhere along 7th Street on Saturday night. Inside engraving reads 'Forever 1974'. Huge sentimental value — reward offered.",
    contactName: "Michael van der Merwe",
  },
  {
    id: "7",
    type: "found",
    status: "active",
    title: "Child's blue school backpack",
    category: "Bags",
    location: "Soweto (Maponya Mall)",
    date: "2026-09-16",
    description:
      "Found a small blue school backpack near the taxi rank at Maponya Mall. Contains exercise books with a learner's name. Keeping it safe at the info desk.",
    contactName: "Palesa Mahlangu",
  },
  {
    id: "8",
    type: "lost",
    status: "active",
    title: "Gautrain gold card & bank cards",
    category: "Wallets & IDs",
    location: "OR Tambo Gautrain",
    date: "2026-09-17",
    description:
      "Dropped my card holder on the Gautrain platform at OR Tambo. Contains a Gautrain gold card and two bank cards. Already blocked the cards but need the holder back.",
    contactName: "Ayesha Cassim",
  },
  {
    id: "9",
    type: "found",
    status: "active",
    title: "Prescription glasses in black case",
    category: "Other",
    location: "Fourways",
    date: "2026-09-13",
    description:
      "Found a pair of prescription glasses in a black hard case at Montecasino parking. Left them with concierge but can arrange a meetup for the owner.",
    contactName: "Johan Pretorius",
  },
  {
    id: "10",
    type: "lost",
    status: "active",
    title: "Matric certificate & academic documents",
    category: "Documents",
    location: "Newtown",
    date: "2026-09-11",
    description:
      "Lost a plastic folder with my matric certificate and university transcripts near the Market Theatre. Urgently needed for a job application this week.",
    contactName: "Bongani Sithole",
  },
  {
    id: "11",
    type: "found",
    status: "returned",
    title: "Grey tabby cat with no collar",
    category: "Pets",
    location: "Melville 7th Street",
    date: "2026-09-08",
    description:
      "Rescued a friendly grey tabby wandering near the shops. Took it to a local vet to scan for a microchip — owner found and happily reunited.",
    contactName: "Karabo Motaung",
  },
  {
    id: "12",
    type: "lost",
    status: "active",
    title: "Navy Nike hoodie left at gym",
    category: "Clothing",
    location: "Randburg",
    date: "2026-09-15",
    description:
      "Left my navy Nike hoodie in the change rooms at a gym in Randburg. Has a small Bafana Bafana pin on the front pocket. Not at lost property yet.",
    contactName: "Kagiso Molefe",
  },
]
