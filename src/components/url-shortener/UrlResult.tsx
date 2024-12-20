import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Copy, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface UrlResultProps {
  shortUrl: string;
  usageLimit: number;
  onShortenAnother: () => void;
}

export function UrlResult({
  shortUrl,
  usageLimit,
  onShortenAnother,
}: UrlResultProps) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    toast({
      title: "Copied!",
      description: "The shortened URL has been copied to your clipboard.",
    });
  };

  return (
    <AnimatePresence>
      {shortUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="p-4 bg-green-100 rounded-md">
            <h3 className="text-lg font-medium text-green-900">
              Your shortened URL:
            </h3>
            <div className="flex items-center mt-2">
              <Input value={shortUrl} readOnly />
              <Button
                variant="outline"
                size="icon"
                className="ml-2"
                onClick={copyToClipboard}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-sm text-green-700">
              Usage limit: {usageLimit} clicks
            </p>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={onShortenAnother}>
              Shorten Another URL
            </Button>
            <Link
              to={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button>
                Open Short URL <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
