export interface IProperty {
    property: {
        location: string;
        country: string;
        property_type: string;
        bedroom_count: number;
        bathroom_count: number;
        price: string;
        image_urls: string[];
        title: string;
        description: string;
    };
}

export const Card: React.FC<IProperty> = ({ property: { title, location, country, property_type, image_urls, description, bedroom_count, bathroom_count, price } }) => {

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={image_urls[0]} alt={title} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{property_type}</div>
                    <h4 className="block mt-1 text-lg leading-tight font-medium text-black">{title}</h4>
                    <p className="mt-2 text-gray-500">{description}</p>
                    <p className="mt-2 text-gray-500">{location}, {country}</p>
                    <p className="mt-2 text-gray-500">Bedrooms: {bedroom_count}, Bathrooms: {bathroom_count}</p>
                    <p className="mt-2 text-gray-500">{price}</p>
                </div>
            </div>
        </div>
    )
}