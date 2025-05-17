export interface Office {
    id: number,
    price: number,
    duration: number,
    name: string,
    slug: string,
    thumbnail: string,
    about: string,
    address: string,
    photos: Photo[],
    benefits: Benefit[],
    city: City
}

interface Photo {
    id: number,
    photo: string,
}

interface Benefit {
    id: number,
    benefit: string
    name: string
}

export interface City {
    id: number,
    name: string,
    slug: string,
    photo: string,
    officeSpaces_count: number,
    officeSpaces: Office[]
}

export interface BookingDetails {
    id: number,
    name: string,
    phone_number: number,
    booking_trx_id: string,
    is_paid: boolean,
    duration: number,
    total_amount: number,
    started_at: string,
    ended_at: string,
    office: Office
}