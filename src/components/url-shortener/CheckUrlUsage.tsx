"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

// Mock API call function (replace with actual API call later)
const checkUrlUsage = async (shortUrl: string): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Shorten url :", shortUrl);
  return Math.floor(Math.random() * 100); // Mock remaining usage
};

export function UrlUsageCheck() {
  const [shortUrl, setShortUrl] = useState("");
  const [remainingUsage, setRemainingUsage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const usage = await checkUrlUsage(shortUrl);
      setRemainingUsage(usage);
      toast({
        title: "Usage Checked",
        description: `Remaining usage for ${shortUrl}: ${usage} clicks`,
      });
    } catch (error) {
      console.error("Error checking URL usage:", error);
      toast({
        title: "Error",
        description: "Failed to check URL usage. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="shortUrl">Enter your shortened URL</Label>
          <Input
            id="shortUrl"
            type="url"
            placeholder="https://short.url/abcdef"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Checking..." : "Check Usage"}
        </Button>
      </form>
      {remainingUsage !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 p-4 bg-green-100 rounded-md"
        >
          <p className="text-green-800 font-medium">
            Remaining usage: {remainingUsage} clicks
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
