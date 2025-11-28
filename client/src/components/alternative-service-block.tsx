import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AlternatingServiceBlock({
                                            title,
                                            description,
                                            icon: Icon,
                                            items,
                                            imageUrl,
                                            reversed,
                                        }: any) {

    // Box shadow changes left/right depending on section
    const shadowClass = reversed
        ? "shadow-[-25px_25px_40px_rgba(0,0,0,0.12)]"
        : "shadow-[25px_25px_40px_rgba(0,0,0,0.12)]";

    // Rounded joint corners
    const roundedClass = reversed
        ? "rounded-l-3xl rounded-r-xl"
        : "rounded-r-3xl rounded-l-xl";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16`}
        >

            {/* IMAGE SIDE WITH DEPTH & JOINT ROUNDED CORNERS */}
            <div className={`${reversed ? "lg:order-2" : ""}`}>
                <div
                    className={`
                        relative w-full h-[320px] overflow-hidden
                        ${roundedClass} ${shadowClass}
                        bg-black/5
                    `}
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-700 ease-out"
                    />
                </div>
            </div>

            {/* TEXT SIDE */}
            <div className={`${reversed ? "lg:order-1" : ""}`}>
                {/* Icon (kept as your original small icon block) */}
                <div className="flex mb-8">
                    <div className="
                        w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40
                        flex items-center justify-center shadow-lg
                    ">
                        <Icon className="w-10 h-10 text-primary" />
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-6">{title}</h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {description}
                </p>

                {items?.length > 0 && (
                    <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                        <CardContent className="p-6">
                            <ul className="space-y-3 text-muted-foreground">
                                {items.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-primary mr-2 mt-1">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                <Button className="mt-8" size="lg">
                    Learn More
                </Button>
            </div>

        </motion.div>
    );
}
