import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AlternatingServiceBlock({ title, description, icon: Icon, items, reversed }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16`}
        >

            {/* ICON SIDE */}
            <div className={`${reversed ? "lg:order-2" : ""} flex justify-center `}>
                <div className="
          w-40 h-40 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/40
          flex items-center justify-center shadow-xl
        ">
                    <Icon className="w-20 h-20 text-primary" />
                </div>
            </div>

            {/* TEXT SIDE */}
            <div className={`${reversed ? "lg:order-1" : ""}`}>
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
