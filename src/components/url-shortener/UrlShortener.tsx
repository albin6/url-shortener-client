import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { UrlInputForm } from "./UrlInputForm";
import { UrlResult } from "./UrlResult";
import { HowItWorks } from "./HowItWorks";

// Mock API call function (replace with actual API call later)
const shortenUrl = async (
  url: string
): Promise<{ shortUrl: string; usageLimit: number }> => {
  // Simulating API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Original URL :", url);
  return {
    shortUrl: `https://short.url/${Math.random().toString(36).substr(2, 6)}`,
    usageLimit: 100,
  };
};

export function UrlShortener() {
  const [shortUrl, setShortUrl] = useState("");
  const [usageLimit, setUsageLimit] = useState(0);
  const [activeTab, setActiveTab] = useState("shorten");
  const { toast } = useToast();

  const handleShorten = async (url: string) => {
    try {
      const result = await shortenUrl(url);
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Shorten Your URLs
            </CardTitle>
            <CardDescription className="mt-5 text-xl text-center text-gray-500">
              Create short, memorable links in seconds.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="shorten">Shorten URL</TabsTrigger>
                <TabsTrigger value="result" disabled={!shortUrl}>
                  Result
                </TabsTrigger>
              </TabsList>
              <TabsContent value="shorten">
                <UrlInputForm onSubmit={handleShorten} />
              </TabsContent>
              <TabsContent value="result">
                <UrlResult
                  shortUrl={shortUrl}
                  usageLimit={usageLimit}
                  onShortenAnother={() => setActiveTab("shorten")}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <HowItWorks />
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </motion.div>
  );
}
