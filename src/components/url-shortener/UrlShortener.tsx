import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { UrlInputForm } from "./UrlInputForm";
import { UrlResult } from "./UrlResult";
import { HowItWorks } from "./HowItWorks";
import { UrlUsageCheck } from "./CheckUrlUsage";
import { createShortenUrl } from "@/services/createShortenUrl";

export function UrlShortener() {
  const [shortUrl, setShortUrl] = useState("");
  const [usageLimit, setUsageLimit] = useState(0);
  const [activeTab, setActiveTab] = useState("shorten");
  const { toast } = useToast();

  const handleShorten = async (url: string) => {
    try {
      const result = await createShortenUrl(url);
      setShortUrl(result.shortUrl);
      setUsageLimit(result.usageLimit);
      setActiveTab("result");
      toast({
        title: "URL Shortened!",
        description: "Your shortened URL is ready to use.",
      });
    } catch (error) {
      console.error("Error shortening URL:", error);
      toast({
        title: "Error",
        description: "Failed to shorten URL. Please try again.",
        variant: "destructive",
      });
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            URL Shortener
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="shorten">Shorten</TabsTrigger>
              <TabsTrigger value="result" disabled={!shortUrl}>
                Result
              </TabsTrigger>
              <TabsTrigger value="check">Check Usage</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "shorten" && (
                  <UrlInputForm onSubmit={handleShorten} />
                )}
                {activeTab === "result" && (
                  <UrlResult
                    shortUrl={shortUrl}
                    usageLimit={usageLimit}
                    onShortenAnother={() => setActiveTab("shorten")}
                  />
                )}
                {activeTab === "check" && <UrlUsageCheck />}
              </motion.div>
            </AnimatePresence>
          </Tabs>
          <HowItWorks />
        </CardContent>
      </Card>
      <Toaster />
    </motion.div>
  );
}
