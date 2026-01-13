import { Card, CardContent } from "@/components/ui/card";
import { HardHat } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <HardHat className="h-8 w-8 text-amber-500" />
            <h1 className="text-2xl font-bold text-gray-900">Under Construction</h1>
          </div>

          <p className="mt-2 text-sm text-gray-700">
            The page you are trying to access is not available yet. Please use the Macedonian version at <span className="font-semibold">/mk</span>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
