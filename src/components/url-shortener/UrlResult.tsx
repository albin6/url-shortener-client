import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="space-y-3"
    >
      <div className="p-3 bg-green-100 rounded-md">
        <h3 className="text-sm font-medium text-green-900 mb-2">
          Your shortened URL:
        </h3>
        <div className="flex items-center">
          <Input value={shortUrl} readOnly className="text-sm" />
          <Button
            variant="outline"
            size="sm"
            className="ml-2 px-2"
            onClick={copyToClipboard}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 text-xs text-green-700">
          Usage limit: {usageLimit} clicks
        </p>
      </div>
      <div className="flex justify-between">
        <Button variant="outline" size="sm" onClick={onShortenAnother}>
          Shorten Another
        </Button>
        <Link to={shortUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm">
            Open Short URL <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
