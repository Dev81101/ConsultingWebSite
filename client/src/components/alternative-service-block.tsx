import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function AlternatingServiceBlock({
                                            title,
                                            description,
                                            icon: Icon,
                                            items,
                                            imageUrl,
                                            reversed,
                                        }: any) {

    // Premium alternating depth
    const shadowClass = reversed
        ? "shadow-[-25px_25px_40px_rgba(0,0,0,0.12)]"
        : "shadow-[25px_25px_40px_rgba(0,0,0,0.12)]";

    // Premium asymmetric rounding
    const roundedClass = reversed
        ? "rounded-l-3xl rounded-r-xl"
        : "rounded-r-3xl rounded-l-xl";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-20"
        >

            {/* IMAGE SIDE  */}
            <div className={reversed ? "lg:order-2" : ""}>
                <div
                    className={`
                        relative w-full h-[340px] overflow-hidden
                        ${roundedClass} ${shadowClass}
                        bg-black/5
                    `}
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover scale-[1.08] hover:scale-[1.12] transition-transform duration-700"
                    />
                </div>
            </div>

            {/* TEXT SIDE */}
            <div className={reversed ? "lg:order-1" : ""}>

                {/* Minimal premium icon container */}
                <div className="mb-8">
                    <div
                        className="
                        w-20 h-20 rounded-2xl bg-white border shadow-md
                        flex items-center justify-center
                    "
                    >
                        <Icon className="w-10 h-10 text-primary" />
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-5">{title}</h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {description}
                </p>

                {/* Bullet list of items */}
                {items?.length > 0 && (
                    <Card className="bg-white/70 backdrop-blur-sm border-border/40 shadow-sm">
                        <CardContent className="p-6">
                            <ul className="space-y-3 text-muted-foreground">
                                {items.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-primary mr-2 mt-1 select-none">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}
            </div>
        </motion.div>
    );
}
