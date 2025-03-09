
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Check, Plus, Trash2, Youtube } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

type Channel = {
  id: string;
  name: string;
  niche: string;
  subscribers: number;
  isLinked: boolean;
};

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [activeTab, setActiveTab] = useState("channels");
  const [channels, setChannels] = useState<Channel[]>([
    {
      id: "1",
      name: "Tech Reviews",
      niche: "Tech Reviews",
      subscribers: 1250,
      isLinked: true
    }
  ]);
  const [newChannelName, setNewChannelName] = useState("");
  const [newChannelNiche, setNewChannelNiche] = useState("Tech Reviews");

  const niches = [
    "Tech Reviews",
    "Gaming",
    "Cooking & Food",
    "Fitness & Health",
    "Travel",
    "Beauty & Fashion",
    "Finance",
    "Education",
    "DIY & Crafts",
    "Entertainment",
  ];

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center dark:bg-gray-900">
        <p className="dark:text-gray-200">Loading...</p>
      </div>
    );
  }

  const handleAddChannel = () => {
    if (!newChannelName) {
      toast.error("Please enter a channel name");
      return;
    }

    const newChannel: Channel = {
      id: Date.now().toString(),
      name: newChannelName,
      niche: newChannelNiche,
      subscribers: 0,
      isLinked: false
    };

    setChannels([...channels, newChannel]);
    setNewChannelName("");
    toast.success("Channel added successfully");
  };

  const handleRemoveChannel = (id: string) => {
    setChannels(channels.filter(channel => channel.id !== id));
    toast.success("Channel removed successfully");
  };

  const handleLinkChannel = (id: string) => {
    // In a real app, this would trigger the YouTube OAuth flow
    setChannels(channels.map(channel => 
      channel.id === id ? { ...channel, isLinked: true } : channel
    ));
    toast.success("Channel linked successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold dark:text-white"
          >
            Welcome, {user.firstName || user.emailAddresses[0]?.emailAddress}!
          </motion.h1>
          <ThemeToggle />
        </div>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Manage your YouTube channels and boost your content creation
        </motion.p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-3 dark:bg-gray-800">
            <TabsTrigger value="channels" className="dark:data-[state=active]:bg-gray-700">Channels</TabsTrigger>
            <TabsTrigger value="content" className="dark:data-[state=active]:bg-gray-700">Content Ideas</TabsTrigger>
            <TabsTrigger value="analytics" className="dark:data-[state=active]:bg-gray-700">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="channels" className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between dark:text-white">
                        <span>{channel.name}</span>
                        {channel.isLinked && (
                          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full flex items-center">
                            <Check className="w-3 h-3 mr-1" />
                            Linked
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">Niche: {channel.niche}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {channel.subscribers} subscribers
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {!channel.isLinked ? (
                        <Button 
                          variant="outline" 
                          className="flex items-center dark:border-gray-600 dark:text-gray-200" 
                          onClick={() => handleLinkChannel(channel.id)}
                        >
                          <Youtube className="w-4 h-4 mr-2" />
                          Link Channel
                        </Button>
                      ) : (
                        <Button variant="outline" className="flex items-center dark:border-gray-600 dark:text-gray-200">
                          <Youtube className="w-4 h-4 mr-2" />
                          Manage
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        className="text-red-500 dark:text-red-400" 
                        onClick={() => handleRemoveChannel(channel.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: channels.length * 0.1 }}
              >
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Add New Channel</CardTitle>
                    <CardDescription className="dark:text-gray-400">Connect a new YouTube channel</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="channel-name" className="dark:text-gray-200">Channel Name</Label>
                      <Input 
                        id="channel-name" 
                        placeholder="My Awesome Channel"
                        value={newChannelName}
                        onChange={(e) => setNewChannelName(e.target.value)}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="channel-niche" className="dark:text-gray-200">Channel Niche</Label>
                      <select
                        id="channel-niche"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={newChannelNiche}
                        onChange={(e) => setNewChannelNiche(e.target.value)}
                      >
                        {niches.map((niche) => (
                          <option key={niche} value={niche}>{niche}</option>
                        ))}
                      </select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-youtube-red hover:bg-red-700 flex items-center justify-center"
                      onClick={handleAddChannel}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Channel
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="content">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Content Ideas</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  View and manage your content ideas across all channels
                </CardDescription>
              </CardHeader>
              <CardContent className="dark:text-gray-300">
                <p>Your content ideas will appear here. Visit the Content Ideas generator to create new ideas.</p>
              </CardContent>
              <CardFooter>
                <Button className="dark:bg-gray-700 dark:text-white">Go to Content Ideas</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Analytics</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Track your channel's performance and growth
                </CardDescription>
              </CardHeader>
              <CardContent className="dark:text-gray-300">
                <p>Channel analytics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
